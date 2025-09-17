import { contacts } from './contacts';
import Image from 'next/image';

const ContactPage = () => {
  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg mb-8 text-center">This is the contact page of my awesome blog.</p>
      <div className="mb-8">
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          width={1200}
          height={400}
          className="rounded-lg object-cover w-full" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Number</th>
              <th className="py-3 px-6 text-left">Blog Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-gray-200 hover:bg-ray-100">
                <td className="py-3 px-6">{contact.name}</td>
                <td className="py-3 px-6">{contact.number}</td>
                <td className="py-3 px-6">{contact.blogName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add a comment form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment</label>
            <textarea id="comment" name="comment" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
      </div>
    </div>)
  );
};

export default ContactPage;
