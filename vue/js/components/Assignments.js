import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In Progress"/>
            <AssignmentList :assignments="filters.completed" title="Completed Assignments"/>

            <AssignmentCreate @add="add"/>
        </section>
    `,

    data() {
        return {
            assignments: [
                // { name: 'Dummy1', complete: false, id: 1, tag: 'math' },
                // { name: 'Dummy2', complete: false, id: 2, tag: 'science' },
                // { name: 'Dummy3', complete: true, id:3, tag: 'math' },
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        },
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => this.assignments = data)
    },

    methods: {
        add(name) {
            if(name !== '') {
                this.assignments.push({
                    name: name,
                    complete: false,
                    id: this.assignments.length + 1
                })
            }
        }
    }
}