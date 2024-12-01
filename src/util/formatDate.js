function formatDate(date) {
    const calendar = new Date(date)
    const getYear = calendar.getFullYear()
    const getNumMonth = calendar.getMonth()
    const getNumDay = calendar.getDay()

    const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

    const getMonth = month[getNumMonth]
    const getDay = day[getNumDay]

    return `${getDay}, ${calendar.getDate()} ${getMonth} ${getYear}`
}
export default formatDate
