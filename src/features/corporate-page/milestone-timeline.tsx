import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  MILESTONE_ADVANCE_MS,
  MilestoneTimelineActions,
  MilestoneTimelineCopy,
  MilestoneTimelineDate,
  MilestoneTimelineGhostYear,
  MilestoneTimelineMotif,
  MilestoneTimelineProgress,
  MilestoneTimelineRoot,
  MilestoneTimelineSlide,
  MilestoneTimelineStage,
  MilestoneTimelineTop,
  MilestoneTimelineVisual,
  MilestoneTimelineYear,
  MilestoneTimelineYears
} from "./corporate-timeline.styles";

type Milestone = {
  year: string;
  title: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

export function MilestoneTimeline({ milestones }: { milestones: readonly Milestone[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(() => !document.hidden);
  const [isPaused, setIsPaused] = useState(false);
  const [timerCycle, setTimerCycle] = useState(0);
  const dragStart = useRef<number | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const isPlaying =
    isInView && isPageVisible && !isPaused && !reduceMotion && milestones.length > 1;

  useEffect(() => {
    if (!timelineRef.current || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(Boolean(entry?.isIntersecting));
        setTimerCycle((cycle) => cycle + 1);
      },
      { threshold: 0.25 }
    );
    observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncVisibility = () => {
      setIsPageVisible(!document.hidden);
      setTimerCycle((cycle) => cycle + 1);
    };
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setTimeout(() => {
      setKeyboardNavigation(false);
      setActiveIndex((current) => (current + 1) % milestones.length);
      setTimerCycle((cycle) => cycle + 1);
    }, MILESTONE_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPlaying, milestones.length, timerCycle]);

  const move = (direction: number, keyboard = false) => {
    setKeyboardNavigation(keyboard);
    setActiveIndex((current) => Math.max(0, Math.min(milestones.length - 1, current + direction)));
    setTimerCycle((cycle) => cycle + 1);
  };

  if (!milestones[activeIndex]) return null;

  return (
    <MilestoneTimelineRoot
      data-keyboard={keyboardNavigation || undefined}
      ref={timelineRef}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1, true);
        }
      }}
    >
      <MilestoneTimelineTop>
        <p>Our journey through the years</p>
        <MilestoneTimelineActions>
          <button
            aria-label={isPaused ? "Play timeline" : "Pause timeline"}
            disabled={Boolean(reduceMotion) || milestones.length < 2}
            onClick={() => {
              setIsPaused((paused) => !paused);
              setTimerCycle((cycle) => cycle + 1);
            }}
            type="button"
          >
            {isPaused ? (
              <Play aria-hidden="true" size={18} />
            ) : (
              <Pause aria-hidden="true" size={18} />
            )}
          </button>
        </MilestoneTimelineActions>
      </MilestoneTimelineTop>

      <MilestoneTimelineStage
        aria-label="Company milestones"
        onPointerCancel={(event) => {
          dragStart.current = null;
          if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerDown={(event) => {
          setKeyboardNavigation(false);
          dragStart.current = event.clientX;
          event.currentTarget.setPointerCapture?.(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (dragStart.current !== null && Math.abs(event.clientX - dragStart.current) > 48) {
            move(event.clientX < dragStart.current ? 1 : -1);
          }
          dragStart.current = null;
          if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        role="group"
        tabIndex={0}
      >
        {milestones.map((milestone, index) => (
          <MilestoneTimelineSlide
            $active={index === activeIndex}
            aria-hidden={index !== activeIndex}
            key={milestone.year}
          >
            <MilestoneTimelineCopy aria-live={index === activeIndex ? "polite" : "off"}>
              <MilestoneTimelineDate>{milestone.year}</MilestoneTimelineDate>
              <h3>{milestone.title}</h3>
              <p>{milestone.copy}</p>
            </MilestoneTimelineCopy>
            <MilestoneTimelineVisual>
              <MilestoneTimelineMotif aria-hidden="true" />
              {milestone.image ? (
                <>
                  <img alt={milestone.imageAlt ?? milestone.title} src={milestone.image} />
                  {milestone.secondaryImage && (
                    <img
                      alt={milestone.secondaryImageAlt ?? milestone.title}
                      className="secondary"
                      src={milestone.secondaryImage}
                    />
                  )}
                </>
              ) : (
                <MilestoneTimelineGhostYear aria-hidden="true">
                  {milestone.year}
                </MilestoneTimelineGhostYear>
              )}
            </MilestoneTimelineVisual>
          </MilestoneTimelineSlide>
        ))}
      </MilestoneTimelineStage>

      <MilestoneTimelineYears aria-label="Company timeline years">
        {milestones.map((milestone, index) => (
          <MilestoneTimelineYear
            $active={index === activeIndex}
            aria-label={`${milestone.year}: ${milestone.title}`}
            aria-pressed={index === activeIndex}
            key={milestone.year}
            onClick={(event) => {
              setKeyboardNavigation(event.detail === 0);
              setActiveIndex(index);
              setTimerCycle((cycle) => cycle + 1);
            }}
            tabIndex={index === activeIndex ? 0 : -1}
            type="button"
          >
            {milestone.year}
            {index === activeIndex && (
              <MilestoneTimelineProgress
                $playing={isPlaying}
                key={`${milestone.year}-${timerCycle}`}
              />
            )}
          </MilestoneTimelineYear>
        ))}
      </MilestoneTimelineYears>
    </MilestoneTimelineRoot>
  );
}
