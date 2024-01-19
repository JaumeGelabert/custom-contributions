import { Button } from "../ui/button";
import { CustomCursor } from "./CustomCursor";
import { IndividualContribution } from "./IndividualContribution";
import { Github } from "lucide-react";
export const Contributions = () => {
  const differentColor = [
    32, 33, 34, 35, 36, 37, 38, 39, 60, 84, 108, 128, 132, 152, 156, 176, 180,
    200, 201, 202, 203, 204
  ];

  return (
    <CustomCursor>
      <div className="bg-white p-4 rounded-lg border shadow flex flex-row justify-center items-center w-[420px] flex-wrap gap-1 group relative hover:shadow-md transition-all">
        {Array.from(Array(240).keys()).map((_, index) => (
          <IndividualContribution
            key={index}
            className={
              differentColor.includes(index)
                ? "group-hover:bg-green-500 group-hover:border-green-500"
                : ""
            }
          />
        ))}
        <Button className="hidden group-hover:flex absolute cursor-none gap-2">
          <Github size={24} />
          Github Repo
        </Button>
      </div>
    </CustomCursor>
  );
};
