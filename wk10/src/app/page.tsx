import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 px-5 py-3 sticky top-0 z-50">
        <div className="text-2xl font-bold text-white">Try Tailwind</div>
        <div className="flex">
          <Link
            href="/"
            className="text-white no-underline mx-3 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-white no-underline mx-3 hover:text-gray-300"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-white no-underline mx-3 hover:text-gray-300"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-white no-underline mx-3 hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-28 px-5"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <h1 className="text-5xl md:text-6xl mb-5">Build Amazing Websites</h1>
        <p className="text-lg mb-7">
          We provide the best tools to create stunning and functional websites.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 text-base rounded">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-5 mt-16">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3 text-center">
            <img src="/images/icn-easy.png" alt="Feature 1" className="w-24 mb-5 mx-auto" />
            <h2 className="text-xl mb-2">Easy to Use</h2>
            <p className="text-gray-700 text-base">
              Our platform is designed to be user-friendly for everyone.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3 text-center">
            <img
              src="/images/icn-responsive.png"
              alt="Feature 2"
              className="w-24 mb-5  mx-auto"
            />
            <h2 className="text-xl mb-2">Responsive Design</h2>
            <p className="text-gray-700 text-base">
              Your website will look great on any device.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3 text-center">
            <img
              src="/images/icn-performance.png"
              alt="Feature 3"
              className="w-24 mb-5  mx-auto"
            />
            <h2 className="text-xl mb-2">Fast Performance</h2>
            <p className="text-gray-700 text-base">
              Optimized for speed and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-5 mt-20 text-center">
        <h2 className="text-3xl mb-10">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="bg-white p-5 rounded-lg shadow w-full md:w-1/3">
            <img
              src="/images/user1.png"
              alt="User 1"
              className="w-24 h-24 rounded-full mb-4  mx-auto"
            />
            <p className="text-gray-700 text-base mb-4">
              "This platform is amazing! It helped me build my website in no time."
            </p>
            <h3 className="text-xl mb-1">John Doe</h3>
            <span className="text-gray-500 text-sm">Web Developer</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow w-full md:w-1/3">
            <img
              src="/images/user2.png"
              alt="User 2"
              className="w-24 h-24 rounded-full mb-4  mx-auto"
            />
            <p className="text-gray-700 text-base mb-4">
              "I love how easy it is to use. Highly recommended!"
            </p>
            <h3 className="text-xl mb-1">Jane Smith</h3>
            <span className="text-gray-500 text-sm">Designer</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow w-full md:w-1/3">
            <img
              src="/images/user3.png"
              alt="User 3"
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <p className="text-gray-700 text-base mb-4">
              "The performance is outstanding. My website loads super fast!"
            </p>
            <h3 className="text-xl mb-1">Mike Johnson</h3>
            <span className="text-gray-500 text-sm">Entrepreneur</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-5 mt-20 text-center">
        <h2 className="text-3xl mb-10">Pricing Plans</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3">
            <h3 className="text-2xl mb-5">Basic</h3>
            <p className="text-gray-700 text-base mb-5">Perfect for small projects</p>
            <div className="text-4xl font-bold text-blue-500 mb-5">$10/month</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-base rounded">
              Choose Plan
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3">
            <h3 className="text-2xl mb-5">Pro</h3>
            <p className="text-gray-700 text-base mb-5">Great for growing businesses</p>
            <div className="text-4xl font-bold text-blue-500 mb-5">$25/month</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-base rounded">
              Choose Plan
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow w-full md:w-1/3">
            <h3 className="text-2xl mb-5">Enterprise</h3>
            <p className="text-gray-700 text-base mb-5">For large-scale projects</p>
            <div className="text-4xl font-bold text-blue-500 mb-5">$50/month</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-base rounded">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-10 mt-20">
        <div className="mb-5">
          <a href="#" className="text-white no-underline mx-2 text-lg hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="text-white no-underline mx-2 text-lg hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className="text-white no-underline mx-2 text-lg hover:text-gray-300">
            LinkedIn
          </a>
        </div>
        <p className="mt-5 text-sm text-gray-400">
          &copy; 2025 Try Tailwind. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
