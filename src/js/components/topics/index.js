import template from './template.html'
import topicsCtrl from './controller'

const topicsCmpt = {
    template,
    controller: topicsCtrl,
    bindings: {
        meetingId: '<',
    }
}

export default topicsCmpt;