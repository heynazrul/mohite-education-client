import { Link } from "react-router-dom";


const RefundPolicy = () => {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
          <p className="mb-4">
            At Mohite Education, we strive to provide high-quality online courses in accounting and finance. We want our
            students to be satisfied with their purchase and have a positive learning experience. However, we understand
            that there may be situations where a refund is necessary. Please read our refund policy carefully.
          </p>
          <h3 className="text-lg font-semibold mb-2">Refund Eligibility</h3>
          <p className="mb-4">To be eligible for a refund, you must meet the following criteria:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>Request a refund within 7 days of the course purchase.</li>
            <li>The course has not been completed or partially completed.</li>
            <li>
              The refund request is based on a valid reason, such as technical issues, unsatisfactory course content, or
              billing errors.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Non-Refundable Items</h3>
          <p className="mb-4">The following items are non-refundable:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>Courses that have been completed or partially completed.</li>
            <li>Courses purchased more than 7 days ago.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Refund Process</h3>
          <p className="mb-4">
            To request a refund, please contact our customer support team at{' '}
            <a href="mailto:support@mohiteeducation.com">support@mohiteeducation.com</a> with the following information:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>Your full name and email address used for the course purchase.</li>
            <li>The reason for the refund request.</li>
            <li>Any supporting documentation or evidence, if applicable.</li>
          </ul>
          <p className="mb-4">
            Once we receive your refund request, we will review it and get back to you within 3 business days. If your
            refund is approved, we will initiate the refund process, and the funds will be credited back to your
            original payment method within a reasonable period.
          </p>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">
            If you have any questions or concerns about our refund policy, please contact us at{' '}
            <a href="mailto:support@mohiteeducation.com">support@mohiteeducation.com</a> or visit our{' '}
            <Link to="/contact">contact page</Link>.
          </p>
          <p className="text-sm text-gray-600">Last updated: 07/07/2023</p>
        </div>
      </div>
    );
};

export default RefundPolicy;