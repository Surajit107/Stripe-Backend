import stripe from "../config/stripeConfig";
import { StripeSessionResponse } from "../../types/types";

// createStripeSession function
export const createStripeSession = async (planID: string, userID: string, customerID: string): Promise<StripeSessionResponse> => {
    try {
        // Create a new Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: planID,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.FRONTEND_HOST}/success/{CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_HOST}/cancel/{CHECKOUT_SESSION_ID}`,
            customer: customerID,
            metadata: {
                userId: userID
            }
        });

        // Replace the placeholder with the actual session ID
        const successUrl = session.success_url?.replace('{CHECKOUT_SESSION_ID}', session.id || '');
        const cancelUrl = session.cancel_url?.replace('{CHECKOUT_SESSION_ID}', session.id || '');

        return {
            id: session.id,
            success_url: successUrl,
            cancel_url: cancelUrl,
        };

    } catch (error) {
        return { error: (error as Error).message };
    };
};