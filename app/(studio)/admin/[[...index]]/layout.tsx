export const metadata = {
  title: "Adfilm Admin Panel",
  description: "Sanity Adfilm Backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full text-left h-[1px] text-white bg-indigo-900 text-sm flex justify-between items-center"></div>
        {children}
      </body>
    </html>
  );
}
