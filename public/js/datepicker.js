const picker = new tempusDominus.TempusDominus( document.getElementById( 'inlinePicker' ), {
  display: {
    inline: true,
    components: {
      decades: true,
      year: true,
      month: true,
      date: true,
      hours: false,
      minutes: false,
      seconds: false,
    }
  },
  stepping: 30,
  restrictions: {
    daysOfWeekDisabled: [ 0, 6 ],
  },
  promptTimeOnDateChange: true,
} )
