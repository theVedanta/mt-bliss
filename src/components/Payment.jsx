import BASE_API_URL from "../BASE_API_URL";

const Payment = () => {
    return (
        <form
            action={`${BASE_API_URL}/checkout`}
            method="POST"
            className="mt-96 px-36"
        >
            <button
                type="submit"
                className="px-10 py-3 bg-blue text-white rounded-lg"
            >
                Checkout
            </button>
        </form>
    );
};

export default Payment;
