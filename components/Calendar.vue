<template>
  <div v-if="events">
    <div class="p-10 w-8/12 mx-auto hidden md:block">
      <FullCalendar :config="config" :events="events"></FullCalendar>
    </div>
    <div class="block md:hidden p-5">
      <div v-for="(month, index) in movileParse(events)" :key="index">
        <h2 class="text-center mt-2">{{ month.month }}</h2>
        <div v-for="event in month.events" class="flex">
          <div class="pt-5">
            <div
              class="
                align-self-center
                font-bold
                text-av-green-dark
                bg-av-green-s
                w-6
                h-6
                rounded-full
                mr-4
                text-center
              "
            >
              {{ event.day }}
            </div>
          </div>
          <p>{{ event.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'fullcalendar/dist/locale/es'
import 'fullcalendar/dist/fullcalendar.css'

const M = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
]
export default {
  // components: { FullCalendar },
  data() {
    return {
      config: {
        locale: 'es',
        defaultView: 'month',
        displayEventTime: false,
        header: {
          left: 'prev,next ',
          center: 'title',
          right: false,
        },
        views: {
          listMonth: { buttonText: 'list month' },
        },
      },
      events: [],
    }
  },
  created() {
    fetch(
      'https://www.googleapis.com/calendar/v3/calendars/triatlonaguaverde%40gmail.com/events?key=AIzaSyAEbJ6Ygtf-_siM__uSPtN6CNPBriiq3QM'
    )
      .then((response) => response.json())
      .then((data) => this.parseEvents(data.items))
  },
  methods: {
    parseEvents(events) {
      let eventList = []
      events.forEach((event) => {
        let e = {}
        e.title = event.summary
        e.start = new Date(event.start.date ?? event.start.dateTime)
        e.end = new Date(event.end.date ?? event.end.dateTime)
        this.events.push(e)
      })
    },
    movileParse(events) {
      let parsed = {}
      events.forEach((e) => {
        let month = e.start.getMonth()
        let year = e.start.getFullYear()
        let now = new Date()

        if (e.start.getTime() > now.getTime()) {
          let eventDetail = { title: e.title, day: e.start.getDate() }
          if (parsed[`${month}-${year}`]) {
            parsed[`${month}-${year}`].events.push(eventDetail)
            parsed[`${month}-${year}`].month = M[month]
            parsed[`${month}-${year}`].year = year
          } else {
            parsed[`${month}-${year}`] = {
              month: M[month],
              year: year,
              events: [eventDetail],
            }
          }
        }
      })
      return parsed
    },
  },
}
</script>
<style>
.fc-event {
  background-color: #8fd46a !important;
  color: black;
  border: none;
  padding: 3px;
}
</style>
