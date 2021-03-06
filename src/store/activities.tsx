import axios from "axios";
import React, { useContext } from "react";
import { createContext, useState } from "react";
import { Activity } from "../components/Todo/types";
import UiContext from "./ui";

export type ActivitiesContextInterface = {
  allActivities: Activity[];
  currentActivity: Activity | null;
  addActivity: (activity: Activity) => void;
  setCurrentActivity: (activity: Activity) => void;
  fetchCurrentActivity: (key: string) => void;
  fetchActivities: () => void;
};

export const ActivitiesContext = createContext<ActivitiesContextInterface>({
  allActivities: [],
  currentActivity: null,
  addActivity: (activity: Activity) => {},
  setCurrentActivity: (activity: Activity) => {},
  fetchCurrentActivity: (key: string) => {},
  fetchActivities: () => {},
});

const fetchActivity = async () => {
  let data = [];
  const URL = "http://www.boredapi.com/api/activity/";
  try {
    data = await (await axios.get(URL)).data;
    if (!data.key) throw Error;
    return data;
  } catch (err) {
    throw Error;
  }
};

const fetchActivityByKey = async (key: string) => {
  let data = [];
  const URL = `http://www.boredapi.com/api/activity?key=${key}`;
  try {
    data = await (await axios.get(URL)).data;
    if (!data.key) throw Error;
    return data;
  } catch (err) {
    throw Error;
  }
};

export const ActivitiesContextProvider: React.FC = ({ children }) => {
  const [allActivities, setAllActivities] = useState<Activity[]>([]);
  const [currActivity, setCurrActivity] = useState<Activity | null>(null);
  const uiContext = useContext(UiContext);

  React.useEffect(() => {
    fetchActivitiesHandler();
  }, []);

  const fetchActivitiesHandler = async () => {
    try {
      for (let i = 0; i < 4; i++) {
        const fetchedActivity = await fetchActivity();
        addActivityHandler(fetchedActivity);
      }
    } catch (err) {
      uiContext.setAction("error", "Unsuccessful fetching actions");
    }
  };

  const fetchCurrentActivityHandler = async (key: string) => {
    try {
        const fetchedActivity:Activity = await fetchActivityByKey(key);
        setCurrActivity(fetchedActivity);
    } catch (err) {
      uiContext.setAction("error", "Unsuccessful action fetching");
    }
  };

  const addActivityHandler = (activity: Activity) => {
    setAllActivities((prevAllActivities) => {
      return [...prevAllActivities, activity];
    });
  };

  const setCurrentActivityHandler = (activity: Activity) => {
    setCurrActivity(activity);
  };

  const context = {
    allActivities: allActivities,
    currentActivity: currActivity,
    addActivity: addActivityHandler,
    setCurrentActivity: setCurrentActivityHandler,
    fetchCurrentActivity: fetchCurrentActivityHandler,
    fetchActivities: fetchActivitiesHandler,
  };

  return (
    <ActivitiesContext.Provider value={context}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesContext;
