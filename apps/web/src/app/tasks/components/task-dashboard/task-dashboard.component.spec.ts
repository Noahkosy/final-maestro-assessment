import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardComponent } from './task-dashboard.component';

describe('DashboardComponent', () => {
    let component: TaskDashboardComponent;
    let fixture: ComponentFixture<TaskDashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskDashboardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
