import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Thousands of customers trust us for fresh, healthy and delicious meals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FFF6] rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>

                  <div className="flex mt-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>

              </div>

              <p className="text-gray-600 mt-6 leading-7">
                "{item.review}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;