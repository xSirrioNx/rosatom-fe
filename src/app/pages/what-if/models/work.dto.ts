export class WorkDto {
  id: string;
  plannedStartDate: Date;
  newPlannedStartDate: Date;
  factStartDate: Date;
  decDayCost: number;
  incDayCost: number;
  normDuration: number;
  minimalDuration: number;
  minimalDurationCost: number;
  addedCost: number;
  newAddedCost: number;
  newAddedChildrenCost: number;
  nextWorks: WorkDto[];
  prevWorks: WorkDto[];

  constructor(object: WorkDto) {
    if (object) {
      Object.assign(this, object);
    }
    if (this.nextWorks) {
      this.nextWorks = this.nextWorks.map(x => new WorkDto(x));
    }
    if (this.prevWorks) {
      this.prevWorks = this.prevWorks.map(x => new WorkDto(x));
    }

    if (this.plannedStartDate) {
      this.plannedStartDate = new Date(this.plannedStartDate);
    }

    if (this.newPlannedStartDate) {
      this.newPlannedStartDate = new Date(this.newPlannedStartDate);
    }

    if (this.factStartDate) {
      this.factStartDate = new Date(this.factStartDate);
    }
  }

  get totalCost(): number {
    return this.newAddedCost || this.addedCost + this.newAddedChildrenCost || this.newAddedChildrenCost;
  }
}
