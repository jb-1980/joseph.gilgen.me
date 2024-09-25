import { Divider, Stack, Typography } from "@mui/material"

export const MyStory = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h5">My Story</Typography>
      <Divider sx={{ border: 2, borderColor: "primary.main" }} />
      <Typography>
        My developer journey started back in 2012 when I begin teaching high
        school math for an online school. We had to create our own curriculum,
        and all of the content was just black and white text describing
        mathematical concepts. So I started by learning some things about HTML
        and CSS to make the content more visually pleasing, as well as actually
        being able to show some math.
      </Typography>
      <Typography>
        As our department begin to implement these new HTML concepts, we became
        aware of Khan Academy that was offering math content for free, that had
        interactive exercises and videos, and we knew that we could continue to
        try to make our own content, or we could use Khan Academy's content. We
        chose the latter.
      </Typography>
      <Typography>
        But this presented its own set of challenges. Our school model was
        asynchronous, allowing a student to enroll at any time of the year, and
        work through the curriculum at their own pace. This meant that we needed
        to know when students were enrolling, when they were dropping, and how
        they were progressing through the curriculum. I would spend hours each
        week updating a spreadsheet with this information, and transferring it
        to the gradebook. I was literally doing line-by-line diffs between the
        spreadsheet and the progress data on Khan Academy. It was a horrible
        experience, and we were almost ready to abandon Khan Academy.
      </Typography>
      <Typography>
        But after searching the internet for an answer, I found what appeared to
        be a promising solution: Khan Academy had this thing called an API, that
        would let us programatically access the data that we needed. I had never
        heard of an API before, but I had written some Python scripts for a
        physics class in college, so I thought I could figure it out. After a
        long weekend, I had a script that could pull the data from Khan Academy,
        parse it, and output a spreadsheet that I could use to update our
        gradebook. It was a game changer for me, and when I showed it to my
        colleagues, they were amazed. I had felt the power of programming, and I
        wanted more.
      </Typography>
      <Typography>
        I started learning more about programming from free online resources. I
        learned about Python, JavaScript, and SQL. I learned about web servers,
        databases, and APIs. I learned about version control, testing, and
        deployment. And as I learned, I started to build things that could solve
        problems for me and my colleagues. The script I began with was now a web
        app that could be used to set up some basic configurations, and then run
        a service to sync data to the gradebooks for Khan Academy, Money Skills,
        and other online resources we were using. In a word, I was becoming a a
        software engineer.
      </Typography>
      <Typography>
        In 2020, I decided to take the leap and become a full-time software. I
        joined a company that focused helping people easily set up microschools,
        creating a platform that would allow them to manage students, teachers,
        and curriculum. I was able to use my experience in education to help
        shape the product, and my experience in software engineering to help
        build it. I was able to work with a team of talented engineers, and
        learn from them as well. I was able to build things that would help
        people, and that was the most rewarding part of all.
      </Typography>
    </Stack>
  )
}
