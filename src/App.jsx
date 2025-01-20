import { useState } from "react";

function App() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleBookNow = (roomName) => {
    setRoom(roomName);
    document.getElementById("booking-form").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ยืนยันการจอง\nคุณ ${name}\nประเภทที่พัก: ${room}\nวันที่: ${date}\คุณจะได้รับการติดต่อโทรไปที่เบอร์${phone}`);
    // Reset form after submission
    setName("");
    setEmail("");
    setDate("");
    setRoom("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 h-[20rem] text-white text-center p-8 bg-[url('./assets/images/house_afternoon_03.jpg')] bg-cover bg-no-repeat bg-center">
        <h1 className="text-[10rem] font-bold ">อู่ทองพักดี</h1>
        <p className="text-[2rem] mt-2">ที่พักในบรรยากาศเงียบสงบ</p>
      </header>

      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ประเภทที่พัก</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">ห้องที่ 1</h3>
              <p className="mt-2">ห้องมาตรฐานเตียงใหญ่พร้อมวิวภูเขา</p>
              <p className="mt-2">ราคา: 600บาท/คืน</p>
              <button
                onClick={() => handleBookNow("ห้องที่1")}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                จองเลย
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">ห้องที่ 2</h3>
              <p className="mt-2">ห้องมาตรฐานเตียงใหญ่พร้อมวิวสวน</p>
              <p className="mt-2">ราคา: 600บาท/คืน</p>
              <button
                onClick={() => handleBookNow("ห้องที่2")}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                จองเลย
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">ลานกางเต็นท์</h3>
              <p className="mt-2">ลานกว้างพร้อมวิวภูเขาและสวน</p>
              <p className="mt-2">ราคา: 100บาท/คืน</p>
              <button
                onClick={() => handleBookNow("เต็นท์")}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                จองเลย
              </button>
            </div>
          </div>
          
        </section>

        <section id="booking-form" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">แบบฟอร์มการจอง</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">ชื่อ</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700">เบอร์โทรศัพท์</label>
              <input
                type="phone"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">อีเมล</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="room" className="block text-gray-700">ประเภทที่พัก</label>
              <input
                type="text"
                id="room"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={room}
                readOnly
                required
              />
            </div>
            

            <div>
              <label htmlFor="date" className="block text-gray-700">วันที่จอง</label>
              <input
                type="date"
                id="date"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              ตกลง
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 U Thong Phak Di Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
