import Link from "next/link";

export default function Post(props) {
  const { date, body, title, describe } = props;
  return (
    <>
      <div
        id="detail-card-3"
        className="max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
          <div className="flex items-center mb-6">
            <img
              src="/images/foto1.jpg"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-gray-600">By Alex Lee</span> -
            <span className="text-gray-600">{date}</span>
          </div>
          <p className="text-gray-600">{describe}</p>
          <Link
            href={`/blog/${title}`}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}
