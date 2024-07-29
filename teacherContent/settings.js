/* You should NOT change that values of the taget pages.
   Changing them will break the site!

   The html that contains the syllabus should be named course-syllabus.html
*/
const settings = {
  "title": "קורס קוסמים",
  "subtitle": "שנת 2024-2025",
  "image": "../teacherContent/magic2024/pencil.png",
  "targetPages": [
      "magicSyllabus",
      "magicPlan"
  ],
  "magicPlan": {
    "template": "plan",
    "title": "מהלך הקורס",
    "entries": [
      {
        "title": "שלום",
        "targetDate": "30-Sep-2024",
        "detailsTitle": "משימות",
        "detailsUrl": "https://docs.google.com/document/d/1BR19ShVzKZ3YhIx-L-UlenuupLYqJpXy/edit?usp=sharing&ouid=108454013441329303622&rtpof=true&sd=true"
      },
      {
        "title": "ברכה",
        "targetDate": "30-Dec-2024",
        "detailsTitle": "משימות",
        "detailsUrl": "https://drive.google.com/file/d/1KeZMlXqa6Ryk6Vakf9lM519QMZ6I652p/view?usp=sharing"
      }
    ]
  },
  "magicSyllabus": {
    "template": "syllabus",
    "title": "תוכן הקורס",
    "contentTitle": "חומר רקע",
    "contentUrl": "https://docs.google.com/document/d/1BR19ShVzKZ3YhIx-L-UlenuupLYqJpXy/edit?usp=sharing&ouid=108454013441329303622&rtpof=true&sd=true"
  }
}