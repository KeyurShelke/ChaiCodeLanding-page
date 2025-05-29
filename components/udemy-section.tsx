"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Course data
const courses = [
  {
    id: 1,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    price: "₹399",
    originalPrice: "₹3,099",
    discount: "87% off",
    thumbnail: "/udemy2.jpeg?height=200&width=350",
  },
  {
    id: 2,
    title: "Frontend Mastery",
    description:
      "Master Frontend from basics to advanced concepts. Includes modern frameworks.",
    rating: 4.8,
    price: "₹299",
    originalPrice: "₹2,999",
    discount: "83% off",
    thumbnail: "/udemyf.png?height=200&width=350",
  },
  {
    id: 3,
    title: "React Native for Beginners",
    description:
      "Learn to build cross-platform mobile apps with React Native. From setup to deployment on app stores.",
    rating: 4.9,
    price: "₹299",
    originalPrice: "₹2,599",
    discount: "85% off",
    thumbnail: "/udemy4.png?height=200&width=350",
  },
];

export default function UdemySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check if we can scroll left or right
  const checkScrollability = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10); // Small buffer for rounding errors
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  // Scroll the slider left or right
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.6;
    const newScrollLeft =
      direction === "left"
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;

    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    // Update scroll buttons after animation
    setTimeout(checkScrollability, 500);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-large mb-4">Our Courses on Udemy</h2>
          <p className="heading-subtitle">
            Join thousands of students who have transformed their careers with
            our comprehensive courses
          </p>
        </motion.div>

        <div className="relative">
          {/* Left arrow button */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 p-3 rounded-full border border-gray-700 ${
              !canScrollLeft
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? (canScrollLeft ? 1 : 0.3) : 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            style={{ left: "-10px" }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </motion.button>

          {/* Right arrow button */}
          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 p-3 rounded-full border border-gray-700 ${
              !canScrollRight
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? (canScrollRight ? 1 : 0.3) : 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            style={{ right: "-10px" }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </motion.button>

          {/* Slider container */}
          <div
            ref={sliderRef}
            className="overflow-x-auto hide-scrollbar flex gap-6 pb-4"
            onScroll={checkScrollability}
          >
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={{
                  ...course,
                  thumbnail: course.thumbnail || "/placeholder.svg",
                }} // Ensure thumbnail is always a string
                index={index}
                inView={inView}
              />
            ))}

            {courses.map((course, index) => (
              <CourseCard
                key={`duplicate-${course.id}`}
                course={{
                  ...course,
                  id: course.id + 100,
                  thumbnail: course.thumbnail || "/placeholder.svg",
                }} // Ensure thumbnail is always a string
                index={index + courses.length}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CourseProps {
  course: {
    id: number;
    title: string;
    description: string;
    rating: number;
    price: string;
    originalPrice: string;
    discount: string;
    thumbnail: string;
  };
  index: number;
  inView: boolean;
}

function CourseCard({ course, index, inView }: CourseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.1 * Math.min(index, 5) }}
      className="flex-shrink-0 w-[300px] md:w-[400px] h-[500px]"
    >
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col">
        {/* Course thumbnail */}
        <div className="aspect-video relative">
          <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-2 left-2 bg-primary text-black text-xs font-bold px-2 py-1 rounded">
            BESTSELLER
          </div>
        </div>

        {/* Course details - flex-grow to take available space */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-lg font-bold mb-2 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {course.description}
            </p>

            <div className="flex items-center mb-2">
              <div className="text-lg font-bold mr-2">{course.rating}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <div className="ml-2 text-xs text-gray-400">Top Rated</div>
            </div>

            <div className="flex items-center mb-4">
              <span className="text-primary text-xl font-bold">
                {course.price}
              </span>
              <span className="text-gray-400 line-through ml-3 text-sm">
                {course.originalPrice}
              </span>
              <span className="ml-3 bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                {course.discount}
              </span>
            </div>
          </div>

          {/* Button fixed at bottom */}
          <div className="mt-auto">
            <Link href="https://www.udemy.com/course/web-dev-master/?couponCode=LEARNNOWPLANS">
              <motion.button
                className="w-full button-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Check Udemy Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
