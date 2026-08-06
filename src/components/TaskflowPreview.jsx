const COLUMNS = [
  {
    title: "To do",
    color: "bg-slate-400",
    cards: ["API 응답 검증", "디자인 시스템 정리"],
  },
  {
    title: "In progress",
    color: "bg-cyan-400",
    cards: ["드래그 앤 드롭", "낙관적 업데이트"],
  },
  {
    title: "Done",
    color: "bg-emerald-400",
    cards: ["JWT 인증", "배포 자동화"],
  },
];

function TaskflowPreview() {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cyan-300/10 bg-[#0b1220] p-3 shadow-2xl sm:p-5"
      role="img"
      aria-label="TaskFlow 칸반 보드 미리보기"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.17),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(139,92,246,0.13),transparent_35%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-cyan-400 text-[10px] font-black text-slate-950 sm:h-6 sm:w-6">
            ✓
          </span>
          <span className="text-xs font-bold tracking-tight text-white sm:text-sm">
            TaskFlow
          </span>
        </div>
        <div className="h-5 w-14 rounded-full border border-white/10 bg-white/5 sm:w-20" />
      </div>

      <div className="relative mt-3 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
        {COLUMNS.map((column) => (
          <div
            key={column.title}
            className="min-w-0 rounded-lg border border-white/5 bg-white/[0.035] p-1.5 sm:rounded-xl sm:p-2.5"
          >
            <div className="mb-2 flex items-center gap-1.5 sm:mb-3">
              <span className={`h-1.5 w-1.5 rounded-full ${column.color}`} />
              <span className="truncate text-[8px] font-semibold text-slate-300 sm:text-[10px]">
                {column.title}
              </span>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              {column.cards.map((card, index) => (
                <div
                  key={card}
                  className={`rounded-md border border-white/5 bg-slate-900/90 p-1.5 shadow-sm sm:rounded-lg sm:p-2 ${
                    column.title === "In progress" && index === 0
                      ? "ring-1 ring-cyan-400/50"
                      : ""
                  }`}
                >
                  <div className="mb-1 flex gap-1">
                    <span
                      className={`h-1 w-4 rounded-full ${
                        index === 0 ? "bg-cyan-400/80" : "bg-violet-400/70"
                      }`}
                    />
                  </div>
                  <span className="block truncate text-[7px] leading-tight text-slate-300 sm:text-[9px]">
                    {card}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskflowPreview;
