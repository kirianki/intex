import servicesData from "@/data/services.json"
import trainingProgramsData from "@/data/training-programs.json"
import siteConfig from "@/data/site-config.json"

export function getServices() {
  return servicesData
}

export function getTrainingPrograms() {
  return trainingProgramsData
}

export function getSiteConfig() {
  return siteConfig
}
