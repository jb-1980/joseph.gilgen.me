import { Button, Dialog, DialogActions, DialogContent } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { match } from "ts-pattern"
import { GhostmailDetails } from "./components/GhostmailDetails"
import { ChessPlaygroundDetails } from "./components/ChessPlayground"
import { StudentTrackerDetails } from "./components/StudentTracker"
import { FlexDatesDetails } from "./components/FlexDates"
import { DrawableCanvasDetails } from "./components/DrawableCanvas"
import { MathFactsDetails } from "./components/MathFacts"
import { MockimonDetails } from "./components/Mockimon"
import { PomodoroDetails } from "./components/ReactPomodoro"
import { MissionBuilderDetails } from "./components/MissionBuilder"
import { KhanSkillLinkerDetails } from "./components/KhanSkillLinker"
import { KhanVideoLinkerDetails } from "./components/KhanVideoLinker"
import { GradesyncerDetails } from "./components/GradeSyncer"
import { KhanGraphQLDetails } from "./components/KhanGraphQL"

export const ProjectDetails = () => {
  const { projectName } = useParams()
  const navigate = useNavigate()

  return (
    <Dialog fullWidth maxWidth="lg" open={true} onClose={() => navigate(-1)}>
      <DialogBody projectName={projectName!} />
    </Dialog>
  )
}

const DialogBody = (props: { projectName: string }) => {
  const navigate = useNavigate()
  return (
    <DialogContent>
      {match(props.projectName)
        .with("ghostmail", () => <GhostmailDetails />)
        .with("chess-playground", () => <ChessPlaygroundDetails />)
        .with("student-tracker", () => <StudentTrackerDetails />)
        .with("flexdates", () => <FlexDatesDetails />)
        .with("drawable-canvas", () => <DrawableCanvasDetails />)
        .with("math-facts", () => <MathFactsDetails />)
        .with("mockimon", () => <MockimonDetails />)
        .with("pomodoro-clock", () => <PomodoroDetails />)
        .with("mission-builder", () => <MissionBuilderDetails />)
        .with("khan-skill-linker", () => <KhanSkillLinkerDetails />)
        .with("khan-video-linker", () => <KhanVideoLinkerDetails />)
        .with("gradesyncer", () => <GradesyncerDetails />)
        .with("khan-graphql", () => <KhanGraphQLDetails />)
        .otherwise(() => (
          <div>404</div>
        ))}
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(-1)}
        >
          Close
        </Button>
      </DialogActions>
    </DialogContent>
  )
}
