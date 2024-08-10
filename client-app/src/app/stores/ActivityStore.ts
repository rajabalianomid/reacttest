import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class ActivityStore {
    activities: Activity[] = [];
    selectActivity: Activity | undefined = undefined;
    editForm = false;
    loading = false;
    loadingInitial = false;


    constructor() {
        makeAutoObservable(this);
    }

    loadActivities = async () => {
        this.setLoadingInitial(true);
        try {
            const activities = await agent.Activities.list();
            
            debugger;
            // this.activities = [];
            runInAction(() => {
                activities.forEach((f: Activity) => {
                    f.date = f.date.split('T')[0];
                    this.activities.push(f);
                });
            })

            this.setLoadingInitial(false);
        } catch (error) {
            console.error(error);
            this.setLoadingInitial(false);
        }
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    selectedActivity = (id: string) => {
        debugger;
        this.selectActivity = this.activities.find(f => f.id === id);
    }
    cancelActivity = () => {
        this.selectActivity = undefined;
    }
    handleOpenForm = (id?: string) => {
        id ? this.selectedActivity(id) : this.cancelActivity();
        this.editForm = true;
    }
    handleCloseForm = () => {
        this.editForm = false;
    }
    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activities.push(activity);
                this.selectActivity = activity;
                this.editForm = false;
                this.loading = false;
            });
        }
        catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            debugger;
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activities = [...this.activities.filter(f => f.id !== activity.id), activity];
                this.selectActivity = activity;
                this.editForm = true;
                this.loading = false;
            });
        }
        catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }

    }
}  