function Contact() {
  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-red-700 text-3xl font-bold mb-4">Contact Us</h1>
        <button onClick={() => window.location = 'mailto:ecamsbb@gmail.com'}>ecamsbb@gmail.com</button>
      </div>
    </div>
  );
}

export default Contact;
