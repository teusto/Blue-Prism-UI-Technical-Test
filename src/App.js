import { FrameApplicationUI } from "./Components/Frame";
import { ListSchedulesProvider } from "./Contexts/listSchedules.context";

export function App() {
    return (
        <ListSchedulesProvider>
            <FrameApplicationUI />
        </ListSchedulesProvider>
    )
}