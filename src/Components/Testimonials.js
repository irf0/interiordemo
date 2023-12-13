import React from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl sm:text-xl ml-10">
        <span className="text-blue-900 font-bold text-4xl sm:text-xl">
          Echoes of Satisfaction
        </span>{" "}
        from Our Clients
      </h1>
      <p className="mt-5 sm:mx-3 mx-9">
        You’ll find stories of how attention to detail, innovative approach,
        <br /> and commitment to merging form with function leaves a lasting
        impact on businesses and their environments.
      </p>

      <div className="flex gap-6 mx-24 sm:mx-1 sm:gap-1 ">
        <Marquee pauseOnHover={true} className="flex gap-6 mt-6">
          <div className="rounded-md bg-white hover:bg-blue-950 h-96 w-96 mx-6 flex flex-col justify-center align-middle p-5 gap-5 border border-orange-500">
            <p className="hover:text-white">
              “This brand aids rapid scaling by swiftly establishing offices in
              new markets, offering flexibility in leasing and furnishing. Their
              understanding of our brand eliminates design hassles. With basic
              input, the team handles construction, saving senior leadership
              time on approvals. ”
            </p>{" "}
            <img
              src="/assets/banner1.webp"
              alt=""
              className="h-10 w-10 rounded-full mx-36 mb-5"
            />
          </div>

          <div className="rounded-md bg-white hover:bg-blue-950 h-96 w-96 mx-6 flex flex-col justify-center align-middle p-5 gap-5 border border-orange-500">
            <p className="hover:text-white">
              "“Utilize their comprehensive services—design, implementation, and
              execution. Opting for their end-to-end approach improved
              communication and streamlined the process. This office design
              enhances recruitment by showcasing workspace and projects,
              fostering creativity and innovation. A functional, worry-free
              environment lets the team focus on tasks effectively, leading to
              improved job performance.”"
            </p>
            <img
              src="/assets/3g.webp"
              alt=""
              className="h-10 w-10 rounded-full mx-36 mb-5"
            />
          </div>

          <div className="rounded-md bg-white hover:bg-blue-950 h-96  sm:pt-16 w-96 mx-6 flex flex-col justify-center align-middle p-5 gap-5 border border-orange-500">
            <p className="hover:text-white">
              “The distinguishing factor of partnering with them was the
              exceptional attitude of its entire team, fostering a sense of
              integration. They presented various proposals, showcasing past
              work and demonstrating willingness to meet demanding and unique
              requirements. Despite being a challenging customer with stringent
              quality expectations, they adapted and customized solutions while
              maintaining cost-effectiveness.”
            </p>{" "}
            <img
              src="/assets/banner12.webp"
              alt=""
              className="h-10 w-10 rounded-full mx-36 mb-5"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Testimonials;
