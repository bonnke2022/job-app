import CreateJobForm from "@/components/CreateJobForm";
import { auth } from "@clerk/nextjs/server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";

const AddJobPage = async () => {
  const queryClient = new QueryClient();
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />
    </HydrationBoundary>
  );
};

export default AddJobPage;
