import noop from '@/utils/noop'
import {identify} from './identify'
import {
  activityLogIn,
  activityInternalLinkClick,
  activityExternalLinkClick,
  activityCtaClick,
  activityClickedNewsletterSubscribe,
  activityClickedUi,
  engagementSearchedWithQuery,
  engagementWatchedTalk,
  engagementStartCourse,
  engagementCourseProgress,
  engagementCompletedCourse,
  engagementCompletedLesson,
  engagementClickedWatchedLessonAgain,
  engagementClickedPlayNextLesson,
  engagementListenPodcast,
  engagementReadArticle,
  engagementStartedTalk,
} from './events'

const events = {
  activityLogIn,
  activityInternalLinkClick,
  activityExternalLinkClick,
  activityCtaClick,
  activityClickedNewsletterSubscribe,
  activityClickedUi,
  engagementSearchedWithQuery,
  engagementWatchedTalk,
  engagementStartCourse,
  engagementCourseProgress,
  engagementCompletedCourse,
  engagementCompletedLesson,
  engagementClickedWatchedLessonAgain,
  engagementClickedPlayNextLesson,
  engagementListenPodcast,
  engagementReadArticle,
  engagementStartedTalk,
}

export const track = (event: string, paramsOrCallback?: any, callback?: any) =>
  noop

const analytics = {
  track,
  identify,
  events,
}

export default analytics
