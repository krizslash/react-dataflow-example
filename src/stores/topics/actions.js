import _ from 'lodash';
import * as redditService from '../../services/reddit';
import * as store from './store';

export async function fetchAllTopics() {
  const topics = await redditService.getDefaultSubreddits();
  const sorted = _.orderBy(topics, (t) => t.subscribers, 'desc');
  store.setters.setTopics(sorted);
}

export function toggleTopicSelection(topicUrl) {
  store.setters.toggleTopic(topicUrl);
}

export function finishTopicsSelection() {
  store.setters.finishTopicsSelection();
}
