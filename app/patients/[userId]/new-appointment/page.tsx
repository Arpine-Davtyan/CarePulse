import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patients.actions";
import Image from "next/image";

export default async function NewAppointmen({
    params,
}: {
    params: Promise<{ userId: string }>;
}) {
    
    const { userId } = await params;

    const patient = await getPatient(userId);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="flex remove-scrollbar container justify-center my-auto">
                <div className="sub-container w-full max-w-[860px] flex-1 justify-between">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />

                    <AppointmentForm
                        type="create"
                        userId={userId}
                        patientId={patient?.$id}
                    />

                    <p className="copyright mt-10 py-12">
                        © 2026 CarePulse
                    </p>
                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="appointment"
                className="side-img max-w-[390px] bg-bottom"
                loading="eager"
            />
        </div>
    );
}
