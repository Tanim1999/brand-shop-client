

const Faq = () => {
    return (
        <div className="my-10 flex flex-col gap-5">
            <h2 className="text-3xl text-[#800000] font-bold text-center">Frequently asked questions</h2>
            <div className="collapse collapse-arrow w-[80%] mx-auto bg-[#800000] text-white">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What products do you sell on your website?
                </div>
                <div className="collapse-content">
                    <p> We specialize in a wide range of tech products, including smartphones, laptops, tablets, gaming consoles, smartwatches, accessories, and more. Our products are sourced from leading brands to ensure quality and reliability.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow w-[80%] mx-auto bg-[#800000] text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I find the right tech product for my needs?
                </div>
                <div className="collapse-content">
                    <p>Our website offers detailed product descriptions, specifications, and customer reviews to help you make an informed decision. Additionally, you can see the products of each brands separately to find your favorite tech quickly</p>
                </div>
            </div>
            <div className="collapse collapse-arrow w-[80%] mx-auto bg-[#800000] text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Do you provide warranty for your tech products?
                </div>
                <div className="collapse-content">
                    <p> 
                    
 Yes, most of our tech products come with a standard manufacturers warranty. Warranty details are provided on the product pages. Additionally, we offer extended warranty plans for certain items for added peace of mind.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;