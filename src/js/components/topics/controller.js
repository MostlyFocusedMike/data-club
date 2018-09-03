import topics from '../../constants/topics'
const SHOW = "Show Topics";
const HIDE = "Hide Topics";

const topicsCtrl = function() {
    this.btnText = SHOW;
    this.topicsVisible = false;
    this.topics = (meetingId) => {
        return topics.filter(topic => topic.meeting_id === meetingId)
    }
    this.getSum = function(total, obj) {
        return parseInt(total) + parseInt(obj.duration);
    }
    this.totalHours = function(meetingId) {
        return (this.topics(meetingId).reduce(this.getSum, 0) / 60).toFixed(1);
    }
    this.hideTopics = function() {
        this.topicsVisible = !this.topicsVisible;
        this.btnText = this.topicsVisible ? HIDE : SHOW; 
    }
}

export default topicsCtrl;