export const metadata = {
  title: "Aimé Cesanges | contact",
};

const ContactPage = () => {
  const dynamicHeight: string = `calc(100vh - 400px)`;

  return (
    <div
      className="flex flex-col items-center justify-between p-24"
      style={{ minHeight: dynamicHeight }}
    >
      Page de contact
    </div>
  );
};

export default ContactPage;
