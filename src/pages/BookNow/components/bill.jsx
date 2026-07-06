const BillingDetails = ({ bookingData }) => {
  const { name, mobile, date, time, totalAmount } = bookingData;

  return (
    <div className="billing-details">
      <h2>Billing Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
    </div>
  );
};

export default BillingDetails;