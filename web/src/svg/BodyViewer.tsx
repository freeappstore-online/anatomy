import type { SystemId } from "../types";
import BodyOutline from "./BodyOutline";
import SkeletalSystem from "./SkeletalSystem";
import MuscularSystem from "./MuscularSystem";
import CirculatorySystem from "./CirculatorySystem";
import RespiratorySystem from "./RespiratorySystem";
import DigestiveSystem from "./DigestiveSystem";
import NervousSystem from "./NervousSystem";

interface Props {
  activeSystems: Set<SystemId>;
  highlightPart: string | null;
  searchHighlights: Set<string>;
  onPartClick: (id: string) => void;
}

export default function BodyViewer({
  activeSystems,
  highlightPart,
  searchHighlights,
  onPartClick,
}: Props) {
  return (
    <svg
      viewBox="60 0 280 570"
      className="w-full h-full max-h-[calc(100vh-8rem)]"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Human body anatomy diagram"
    >
      <BodyOutline />

      {activeSystems.has("skeletal") && (
        <SkeletalSystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
      {activeSystems.has("muscular") && (
        <MuscularSystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
      {activeSystems.has("circulatory") && (
        <CirculatorySystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
      {activeSystems.has("respiratory") && (
        <RespiratorySystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
      {activeSystems.has("digestive") && (
        <DigestiveSystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
      {activeSystems.has("nervous") && (
        <NervousSystem
          highlight={highlightPart}
          searchHighlights={searchHighlights}
          onClick={onPartClick}
        />
      )}
    </svg>
  );
}
