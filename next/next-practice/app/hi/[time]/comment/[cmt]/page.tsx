export default function HiTimeCmt({
  params,
}: {
  params: { time: string; cmt: string };
}) {
  return (
    <div>
      Good {params.time} - {params.cmt}!
    </div>
  );
}
