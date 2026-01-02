import {BookingSelectedSection, BookingDialogSection} from "@/features/booking";
import {getStatesServer} from "@/features/booking/services";

export default async function BookingPage() {
  const states = await getStatesServer();  
  return (
    <>
      <BookingDialogSection states={states} />
      <BookingSelectedSection states={states} />
    </>
  );
}
