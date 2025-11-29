import { useEffect, useState } from "react"

const surahNames = [
  "الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","ابراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبإ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الانسان","المرسلات","النبإ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"
]

 function Quran() {
  const [surahs, setSurahs] = useState([])
  const [activeSurah, setActiveSurah] = useState(null)
  const [audioSrc, setAudioSrc] = useState("")
  const [loadingAudio, setLoadingAudio] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchSurahs() {
      const res = await fetch("https://api.alquran.cloud/v1/meta")
      const data = await res.json()
      setSurahs(data.data.surahs.references)
    }
    fetchSurahs()
  }, [])

  const handlePlay = (surahNumber) => {
    const src = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`
    setAudioSrc(src)
    setActiveSurah(surahNumber)
    setLoadingAudio(true)
  }

  const filteredSurahs = surahs.filter((s) => {
    if (!search.trim()) return true
    const index = surahNames.findIndex((name) => name.includes(search.trim()))
    return index + 1 === s.number
  })

  return (
    <div>
      <input
        id="input"
        type="text"
        placeholder="ابحث عن سورة..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div class="container">
        {filteredSurahs.map((s) => (
          <div
            key={s.number}
            class={`surah ${activeSurah === s.number ? "active" : ""}`}
            onClick={() => handlePlay(s.number)}
          >
            <h3>{s.name}</h3>
            <p>{s.englishName}</p>
          </div>
        ))}
      </div>

      {/* Overlay while audio loads */}
      {loadingAudio && (<div id="overlay"><div class="spinner"></div></div>)}

      {/* Audio player */}
      <audio
        id="audioPlayer"
        src={audioSrc}
        controls
        onCanPlayThrough={() => {
          setLoadingAudio(false)
        }}
      />
    </div>
  )
}

export default Quran