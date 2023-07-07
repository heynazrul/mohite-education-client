import { Link } from 'react-router-dom';

const TermsCondition = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
        <p className="mb-4">
          Welcome to Mohite Education! These Terms of Use outline the rules and regulations for using our website and
          accessing our online courses related to accounting and finance. By using our website and purchasing our
          courses, you agree to comply with these terms. Please read them carefully.
        </p>
        <h3 className="text-lg font-semibold mb-2">Intellectual Property</h3>
        <p className="mb-4">
          All content and materials available on Mohite Education, including but not limited to text, graphics, logos,
          images, videos, and course materials, are the property of Mohite Education and protected by applicable
          intellectual property laws. You may not use, copy, distribute, or modify any content from our website without
          explicit permission from Mohite Education.
        </p>
        <h3 className="text-lg font-semibold mb-2">Course Enrollment</h3>
        <p className="mb-4">By enrolling in our courses, you agree to the following:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>You will provide accurate and up-to-date information during the enrollment process.</li>
          <li>
            You will not share your course login credentials with others or allow unauthorized access to your account.
          </li>
          <li>You will not distribute, reproduce, or resell course materials without explicit permission.</li>
          <li>You will use the course materials for personal learning purposes only and not for any commercial use.</li>
          <li>You will comply with all applicable laws and regulations while accessing our courses.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">User Conduct</h3>
        <p className="mb-4">While using our website and accessing our courses, you agree to:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Not engage in any unlawful, fraudulent, or malicious activities.</li>
          <li>
            Not upload or transmit any harmful or malicious content that may disrupt or damage our website or interfere
            with the learning experience of other users.
          </li>
          <li>Not attempt to gain unauthorized access to our website, servers, or other systems.</li>
          <li>Not impersonate any person or entity or falsely represent your affiliation with any person or entity.</li>
          <li>
            Not use our website or courses for any commercial or promotional purposes without our explicit consent.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Limitation of Liability</h3>
        <p className="mb-4">
          Mohite Education and its instructors shall not be liable for any direct, indirect, incidental, consequential,
          or special damages arising out of or in connection with the use of our website or courses, even if advised of
          the possibility of such damages.
        </p>
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="mb-4">
          If you have any questions or concerns about our Terms of Use, please contact us at{' '}
          <a href="mailto:support@mohiteeducation.com">support@mohiteeducation.com</a> or visit our{' '}
          <Link to="/contact">contact page</Link>.
        </p>
        <p className="text-sm text-gray-600">Last updated: 07/07/2023</p>
      </div>
    </div>
  );
};

export default TermsCondition;
