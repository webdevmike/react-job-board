import { basePath } from "~/config";

export default function Background() {
  return (
    <div className="background">
      <img
        className="background__image"
        src={`${basePath}/pattern.svg`}
        alt="Background pattern"
      />
    </div>
  );
}
