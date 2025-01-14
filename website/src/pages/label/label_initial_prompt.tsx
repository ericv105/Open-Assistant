import Head from "next/head";
import { TaskEmptyState } from "src/components/EmptyState";
import { LoadingScreen } from "src/components/Loading/LoadingScreen";
import { Task } from "src/components/Tasks/Task";
import { useLabelInitialPromptTask } from "src/hooks/tasks/useLabelingTask";

const LabelInitialPrompt = () => {
  const { tasks, isLoading, trigger, reset } = useLabelInitialPromptTask();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (tasks.length === 0) {
    return <TaskEmptyState />;
  }

  return (
    <>
      <Head>
        <title>Label Initial Prompt</title>
        <meta name="description" content="Label Initial Prompt" />
      </Head>
      <Task key={tasks[0].task.id} frontendId={tasks[0].id} task={tasks[0].task} trigger={trigger} mutate={reset} />
    </>
  );
};

export default LabelInitialPrompt;
