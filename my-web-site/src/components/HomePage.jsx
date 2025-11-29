import Lectures from './Lectures'
import AdhanTimings from './AdhanTimings'
import Header from './Header'
import ScrollUpButton from './ScrollUpButton'
import HadithViewer from './HadithViewer'
import Quran from './Quran'
import TopStudents from './TopStudents'
import "./HomePage.css"; // we'll style separately




function HomePage() {

  const lectures = [
    { title: "تعلم أحكام التجويد", source: "https://www.youtube.com/embed/3Y9fwYvN6Rs", img: "../src/assets/images/fares.jpg", speaker: "الشيخ فارس عنتر" },
    { title: "علاج التوتر و القلق و ماذا تحتاج لتستقر حياتك و نفسيتك", source: "https://www.youtube.com/embed/LxXcznxw8TQ", img: "../src/assets/images/profile.jpg", speaker: "الشيخ أمجد سمير" },
    { title: "سر الخشوع في الصلاة ! تعلم كيف تخشع في صلاتك لتنضبط حياتك", source: "https://www.youtube.com/embed/_Rhfup6NSY0", img: "../src/assets/images/profile.jpg", speaker: "الشيخ أمجد سمير" },
    { title: "ارضى بما قسم الله لك", source: "https://www.youtube.com/embed/jPa-bDYq7Dk", img: "../src/assets/images/fathi.jpg", speaker: "الشيخ فتحي صافي" },
    { title: "لا تكن فارغاً ولا تضيع وقت في التفاهات", source: "https://www.youtube.com/embed/rMsup96W9WE", img: "../src/assets/images/profile.jpg", speaker: "الشيخ أمجد سمير" },
  ]


  return (
    <>

        <ScrollUpButton />



        <Header />

        <main>

          <section class="main" id="main">
            <div class="overlay"></div>
            <div class="container">
              <div class="text">
                <h1>
                  مرحبا بكم في <br />
                  نادي وَرتّـل
                </h1>
                <a href="#hadith"><button>ابدأ التصفح <i class="ri-arrow-left-line"></i></button></a>
              </div>
            </div>
          </section>


          <section class="topSudents" id="topStudents">
            <h2>🌟 أفضل طلابنا</h2>
            <TopStudents/>
          </section>

          <section class="hadith" id="hadith">
            <h2>بعض الأحاديث من صحيح مسلم</h2>
            <HadithViewer />
          </section>


          <section class="lectures" id="lectures">
            <h2>أهم المحاضرات الدينية</h2>
            <Lectures lectures={lectures} />
          </section>


          <section class="quran" id="quran">
            <h2>القرآن الكريم</h2>
            <Quran />
          </section>

          <section class="adhan" id="adhan">
            <h2>أوقات الصلاة في مدينة حلب</h2>
            <AdhanTimings />
          </section>
        </main>

        <footer id="contact">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#43a047" fill-opacity="1"
              d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,138.7C672,160,768,224,864,224C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>

          <ul class="links">
            <li><i class="ri-facebook-line"></i></li>
            <li><i class="ri-instagram-line"></i></li>
            <li><i class="ri-twitter-line"></i></li>
            <li><i class="ri-whatsapp-line"></i></li>
          </ul>

        </footer>

        <audio id="myAudio" controls autoplay hidden>
          <source src="../src/assets/audios/get_started.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
    </>
  )
}

export default HomePage
