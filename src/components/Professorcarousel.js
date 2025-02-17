import React, { useEffect, useRef } from "react";

const professorData = [
  { name: "Dr. Fuad Abu Zahra", email: "fabuzahra@lewisu.edu", office: "Office: ALB-110", image: "/ProfImages/Fuad Abu Zahra.png" },
  { name: "Dr. Osama 'Sam' Abuomar", email: "oabuomar@lewisu.edu", office: "Office: SU-113", image: "/ProfImages/Dr. Osama Abuomar.png" },
  { name: "Jude Adeniji", email: "jadeniji@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Imad Al Saeed", email: "ialsaeed@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Ziad Al Sharif", email: "zalsharif@lewisu.edu", office: "Office: AS-112-A", image: "/ProfImages/Zaid Al Sharif.png" },
  { name: "Dr. Mahmood Al-khassaweneh", email: "malkhassaweneh@lewisu.edu", office: "Office: AS-116-A", image: "/ProfImages/Dr. Mahmood Al-khassaweneh.png" },
  { name: "Khaled Alrfou", email: "kalrfou@lewisu.edu", office: "Office: ALB-112", image: null },
  { name: "Abdullah Alshboul", email: "aalshboul@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Yazan Alsmadi", email: "yalsmadi@lewisu.edu", office: "Office: AS-114-A", image: null },
  { name: "Dr. Khaled Alzoubi", email: "alzoubkh@lewisu.edu", office: "Office: AS-118-A", image: "/ProfImages/Dr. Khaled Alzoubi.png" },
  { name: "Ahmad Awwad", email: "aawwad1@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Moussa Ayyash", email: "mayyash@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Manoj Bhat", email: "bhatma@lewisu.edu", office: "Office: SU-110", image: "/ProfImages/Manoj Bhat.png" },
  { name: "Vadim Biryukov", email: "vbiryukov@lewisu.edu", office: "Office: SU-108", image: "/ProfImages/Vadim Biryukov.png" },
  { name: "Kelly Blaszczyk", email: "kblaszczyk@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Jaeik Cho", email: "jcho1@lewisu.edu", office: "Office: SU-109", image: "/ProfImages/Dr. Jaeik Cho.png" },
  { name: "Eric Chou", email: "echou@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Matthew Clavelli", email: "mclavelli@lewisu.edu", office: "Office: SU-105", image: null },
  { name: "Yahya Daoud", email: "ydaoud@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Dana Dominiak", email: "dominiada@lewisu.edu", office: "Office: AS-053-S", image: "/ProfImages/Dr. Dana Dominiak.png" },
  { name: "Br. Thomas Dupre", email: "dupreth@lewisu.edu", office: "Office: AS-128-A", image: "/ProfImages/Br. Thomas Dupre.png" },
  { name: "Melissa Eichelberger", email: "eichelme@lewisu.edu", office: "Office: LR-344B", image: "/ProfImages/Dr. Melissa Eichelberger.png" },
  { name: "Jason Elsinger", email: "jelsinger@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dan Ezenekwe", email: "dezenekwe@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Natalija Glisovic", email: "nglisovic@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Amanda Harsy Ramsay", email: "harsyram@lewisu.edu", office: "Office: SU-124", image: "/ProfImages/Dr. Amanda Harsy Ramsay.png" },
  { name: "Mark Hatchel", email: "mhatchel@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Shurouq Hmoud", email: "shmoud@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Cynthia Howard", email: "howardcy@lewisu.edu", office: "Office: AS-131-L", image: "/ProfImages/Dr. Cynthia Howard.png" },
  { name: "En Hsin Huang", email: "ehuang@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Margaret Juraco", email: "juracoma@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Firas Khasawneh", email: "khasawfi@lewisu.edu", office: "Office: Adjunct", image: "/ProfImages/Dr. Rami Khasawneh.png" },
  { name: "Dr. Rami Khasawneh", email: "khasawra@lewisu.edu", office: "Office: AS-059-S", image: null },
  { name: "Dr. Victoria Heekyung Kim", email: "hkim3@lewisu.edu", office: "Office: AS-111-A", image: null },
  { name: "John Kim", email: "jkim3@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Young J. Paul Kim", email: "kimyo@lewisu.edu", office: "Office: AS-110-A", image: "/ProfImages/Dr. Young June Paul Kim.png" },
  { name: "Sung Kim", email: "skim2@lewisu.edu", office: "Office: AS-126-A", image: "/ProfImages/Sung Kim.png" },
  { name: "Dr. Ray Klump", email: "klumpra@lewisu.edu", office: "Office: SU-105", image: "/ProfImages/Dr. Ray Klump.png" },
  { name: "Matthew Kwiatkowski", email: "kwiatkma@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Michael J. Lewis", email: "mlewis8@lewisu.edu", office: "Office: AS-110A-A", image: "/ProfImages/Dr. Michael Lewis.png" },
  { name: "Alison Major", email: "amajor@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Gina Martinez", email: "martingi@lewisu.edu", office: "Office: AS-130-L", image: "/ProfImages/Dr. Gina Martinez.png" },
  { name: "Yacine Merdjemak", email: "ymerdjemak@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Marie Meyer", email: "mmeyer2@lewisu.edu", office: "Office: SU-128", image: "/ProfImages/Dr. Marie Meyer.png" },
  { name: "John Mikos", email: "jmikos@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Daiva Mikunas", email: "mikunada@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dennis Monbrod", email: "dmonbrod1@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Leanora Moore", email: "lmoore12@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Diane Nead", email: "dnead@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Yousef Nijim", email: "ynijim@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. David Nowak", email: "dnowak2@lewisu.edu", office: "Office: AS-026-L", image: "/ProfImages/David Nowak.png" },
  { name: "Michael Nowak", email: "nowakmi@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Samer Odeh", email: "sodeh1@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Safwan Omari", email: "omarisa@lewisu.edu", office: "Office: AS-129-L", image: "/ProfImages/Dr. Safwan Omari.png" },
  { name: "Laura Paramo", email: "lparamo1@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Jason Perry", email: "perryjn@lewisu.edu", office: "Office: AS-127-L", image: "/ProfImages/Dr. Jason Perry.png" },
  { name: "Dr. Mathias Plass", email: "plassma@lewisu.edu", office: "Office: AS-125-L", image: "/ProfImages/Dr. Mathias Plass.png" },
  { name: "Eric Pogue", email: "epogue@lewisu.edu", office: "Office: AS-124-A", image: "/ProfImages/Eric Pogue.png" },
  { name: "Eric Reynoso", email: "ereynoso@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "John Rinderer", email: "jrinderer@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Alejandro Rodriguez", email: "arodriguez47@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Michael Roppo", email: "mroppo@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Brandon Schabell", email: "brandonmschabell@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Adam Schultze", email: "aschultze@lewisu.edu", office: "Office: SU-130", image: "/ProfImages/Dr. Adam Schultze.png" },
  { name: "Sheikh Shamsuddin", email: "shamsush@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Michael Smith", email: "msmith42@lewisu.edu", office: "Office: SU-122", image: "/ProfImages/Michael Smith.png" },
  { name: "Suzan Sollie", email: "solliesu@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Eric Spangler", email: "spangler@lewisu.edu", office: "Office: AS-120-A", image: "/ProfImages/Eric Spangler.png" },
  { name: "Jayme M. Speva", email: "spevaja@lewisu.edu", office: "Office: AS-032-L", image: "/ProfImages/Jayme Speva.png" },
  { name: "Dr. Brittany Stephenson", email: "bstephenson@lewisu.edu", office: "Office: SU-126", image: "/ProfImages/Dr. Brittany Stephenson.png" },
  { name: "Kayla Stephenson", email: "kstephenson3@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Quinn Stratton", email: "qstratton@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Amila Sudu Ambegedara", email: "asuduambegedara@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Sean Sullivan", email: "ssullivan7@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Cara Sulyok", email: "csulyok@lewisu.edu", office: "Office: SU-125", image: "/ProfImages/Dr. Cara Sulyok.png" },
  { name: "Dr. Piotr Szczurek", email: "szczurpi@lewisu.edu", office: "Office: SU-111", image: "/ProfImages/Dr. Piotr Szczurek.png" },
  { name: "Indika Udagedara", email: "iudagedara@lewisu.edu", office: "Office: SU-116", image: "/ProfImages/Dr. Indika Udagedara.png" },
  { name: "Dr. Fadi Wedyan", email: "fwedyan@lewisu.edu", office: "Office: AS-122-A", image: "/ProfImages/Dr. Fadi Wedyan.png" },
  { name: "Stephen Welsch", email: "welschst@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Brandon White", email: "bwhite5@lewisu.edu", office: "Office: Adjunct", image: null },
  { name: "Dr. Bo Xu", email: "xubo@lewisu.edu", office: "Office: SU-105", image: null },
  { name: "Dr. Wanyu Zang", email: "wzang@lewisu.edu", office: "Office: AS-029L", image: "/ProfImages/Dr. Wanyu Zang.png" }
  // if image is null then it will use static professor image
];

const placeholderImage = "/ProfImages/StaticProfessor.png"; // static professor image

const ProfessorCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 2; // Adjust speed if necessary
    const intervalTime = 50; // Controls how often the scroll updates
    let scrolling = true;
    let isAtTop = true; // Start with a pause at the top

    const scroll = () => {
      if (!carousel) return;

      const totalHeight = carousel.scrollHeight;
      const visibleHeight = carousel.clientHeight;

      // If it reaches the bottom, pause then reset
      if (carousel.scrollTop + visibleHeight >= totalHeight - 1) {
        scrolling = false;
        setTimeout(() => {
          carousel.scrollTo({ top: 0, behavior: "instant" });
          isAtTop = true; // Mark that we're back at the top
          setTimeout(() => {
            scrolling = true;
          }, 2000); // Pause at the top before restarting
        }, 2000); // Pause before resetting
      } 
      // If it reaches the top, pause before restarting scroll
      else if (carousel.scrollTop === 0 && isAtTop) {
        scrolling = false;
        isAtTop = false; // Prevent multiple triggers
        setTimeout(() => {
          scrolling = true;
        }, 1000); // Adjust pause time as needed
      } 
      // Keep scrolling if allowed
      else if (scrolling) {
        carousel.scrollBy({ top: scrollSpeed, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black p-4 overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel flex flex-wrap justify-start overflow-y-auto"
        style={{
          height: "92vh",
          scrollBehavior: "smooth",
          paddingRight: "20px",
        }}
      >
        {/* Sorting the professorData alphabetically by last name */}
        {[...professorData]
          .sort((a, b) => {
            // Extract last name from the full name
            const lastNameA = a.name.split(" ").pop().toLowerCase();
            const lastNameB = b.name.split(" ").pop().toLowerCase();
            return lastNameA.localeCompare(lastNameB);
          })
          .map((prof, index) => (
            <div
              key={index}
              className="bg-red-900 p-4 rounded-lg text-center min-w-[150px] flex-shrink-0"
              style={{
                flexBasis: "calc(20% - 16px)",
                marginBottom: "10px",
                marginRight: "16px",
              }}
            >
              <img
                src={prof.image || placeholderImage}
                alt={prof.name}
                className="w-32 h-32 object-cover mx-auto"
              />
              <p className="text-white text-sm mt-2">{prof.name}</p>
              <p className="text-white text-xs">{prof.email}</p>
              <p className="text-white text-xs">{prof.office}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfessorCarousel;