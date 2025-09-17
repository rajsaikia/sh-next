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
              <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{contact.name}</td>
                <td className="py-3 px-6">{contact.number}</td>
                <td className="py-3 px-6">{contact.blogName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)
  );
};

export default ContactPage;
