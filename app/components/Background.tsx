import { basePath } from "~/config";

export default function Background() {
  return (
    <div className="background">
      <img
        className="background__image"
        src={`${basePath}images/pattern.svg`}
        alt="Background pattern"
      />
    </div>
  );
}
