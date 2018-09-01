import topics from '../../constants/topics'

const topicsCtrl = function() {
    this.topics = (meetingId) => {
        return topics.filter(topic => topic.meeting_id === meetingId)
    }
}

export default topicsCtrl;