import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-confirm-delete-modal",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Modal Overlay -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      (click)="onCancel()"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded w-full max-w-[767px] p-8"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-[22px] font-medium text-[#3F4254]">
            Confirm Delete
          </h2>
          <button
            (click)="onCancel()"
            class="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_303_14789)">
                <path
                  d="M0.930472 18C0.693367 18 0.456263 17.9099 0.276118 17.7284C-0.0855288 17.3667 -0.0855288 16.7804 0.276118 16.4187L16.4236 0.271235C16.7853 -0.0904116 17.3716 -0.0904116 17.7332 0.271235C18.0949 0.632881 18.0949 1.2192 17.7332 1.58107L1.58596 17.7284C1.40445 17.9087 1.16735 18 0.930472 18Z"
                  fill="#3F4254"
                />
                <path
                  d="M17.0791 18C16.842 18 16.6051 17.9099 16.4248 17.7284L0.276118 1.58107C-0.0855288 1.2192 -0.0855288 0.632881 0.276118 0.271235C0.637764 -0.0904116 1.22408 -0.0904116 1.58596 0.271235L17.7332 16.4187C18.0949 16.7804 18.0949 17.3667 17.7332 17.7284C17.5517 17.9087 17.3149 18 17.0791 18Z"
                  fill="#3F4254"
                />
              </g>
              <defs>
                <clipPath id="clip0_303_14789">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="flex flex-col items-center">
          <!-- Trash Icon -->
          <div class="mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/58fdb20a82a54d69c7fe545df062d0d0df66f635?width=294"
              alt="Delete"
              class="w-[147px] h-[94px]"
            />
          </div>

          <!-- Message -->
          <p class="text-2xl font-semibold text-[#212529] mb-10 text-center">
            Are you sure you want to delete?
          </p>

          <!-- Action Buttons -->
          <div class="flex items-center gap-5">
            <!-- Delete Button -->
            <button
              (click)="onConfirm()"
              class="flex items-center gap-3 px-5 py-2 bg-[#C20510] hover:bg-[#a00410] text-white font-semibold rounded transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.667 4.66663C12.4902 4.66663 12.3206 4.73686 12.1956 4.86189C12.0706 4.98691 12.0003 5.15648 12.0003 5.33329V12.794C11.9812 13.1311 11.8296 13.447 11.5787 13.6729C11.3277 13.8988 10.9976 14.0163 10.6603 14H5.34033C5.00306 14.0163 4.67298 13.8988 4.422 13.6729C4.17101 13.447 4.01945 13.1311 4.00033 12.794V5.33329C4.00033 5.15648 3.93009 4.98691 3.80506 4.86189C3.68004 4.73686 3.51047 4.66663 3.33366 4.66663C3.15685 4.66663 2.98728 4.73686 2.86225 4.86189C2.73723 4.98691 2.66699 5.15648 2.66699 5.33329V12.794C2.68602 13.4848 2.97805 14.1399 3.47911 14.6159C3.98018 15.0918 4.64944 15.3498 5.34033 15.3333H10.6603C11.3512 15.3498 12.0205 15.0918 12.5215 14.6159C13.0226 14.1399 13.3146 13.4848 13.3337 12.794V5.33329C13.3337 5.15648 13.2634 4.98691 13.1384 4.86189C13.0134 4.73686 12.8438 4.66663 12.667 4.66663Z"
                  fill="white"
                />
                <path
                  d="M13.3333 2.66663H10.6667V1.33329C10.6667 1.15648 10.5964 0.986912 10.4714 0.861888C10.3464 0.736864 10.1768 0.666626 10 0.666626H6C5.82319 0.666626 5.65362 0.736864 5.5286 0.861888C5.40357 0.986912 5.33333 1.15648 5.33333 1.33329V2.66663H2.66667C2.48986 2.66663 2.32029 2.73686 2.19526 2.86189C2.07024 2.98691 2 3.15648 2 3.33329C2 3.5101 2.07024 3.67967 2.19526 3.8047C2.32029 3.92972 2.48986 3.99996 2.66667 3.99996H13.3333C13.5101 3.99996 13.6797 3.92972 13.8047 3.8047C13.9298 3.67967 14 3.5101 14 3.33329C14 3.15648 13.9298 2.98691 13.8047 2.86189C13.6797 2.73686 13.5101 2.66663 13.3333 2.66663ZM6.66667 2.66663V1.99996H9.33333V2.66663H6.66667Z"
                  fill="white"
                />
                <path
                  d="M7.33333 11.3333V6.66667C7.33333 6.48986 7.2631 6.32029 7.13807 6.19526C7.01305 6.07024 6.84348 6 6.66667 6C6.48986 6 6.32029 6.07024 6.19526 6.19526C6.07024 6.32029 6 6.48986 6 6.66667V11.3333C6 11.5101 6.07024 11.6797 6.19526 11.8047C6.32029 11.9298 6.48986 12 6.66667 12C6.84348 12 7.01305 11.9298 7.13807 11.8047C7.2631 11.6797 7.33333 11.5101 7.33333 11.3333Z"
                  fill="white"
                />
                <path
                  d="M10.0003 11.3333V6.66667C10.0003 6.48986 9.93009 6.32029 9.80506 6.19526C9.68004 6.07024 9.51047 6 9.33366 6C9.15685 6 8.98728 6.07024 8.86225 6.19526C8.73723 6.32029 8.66699 6.48986 8.66699 6.66667V11.3333C8.66699 11.5101 8.73723 11.6797 8.86225 11.8047C8.98728 11.9298 9.15685 12 9.33366 12C9.51047 12 9.68004 11.9298 9.80506 11.8047C9.93009 11.6797 10.0003 11.5101 10.0003 11.3333Z"
                  fill="white"
                />
              </svg>
              Delete
            </button>

            <!-- Cancel Button -->
            <button
              (click)="onCancel()"
              class="flex items-center gap-3 px-5 py-2 bg-[#009FD8] hover:bg-[#0385b5] text-white font-semibold rounded transition-colors"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_303_14813)">
                  <path
                    d="M0.619989 12C0.461919 12 0.30385 11.9399 0.183753 11.8189C-0.0573447 11.5778 -0.0573447 11.1869 0.183753 10.9458L10.9488 0.180823C11.1899 -0.0602744 11.5807 -0.0602744 11.8218 0.180823C12.0629 0.421921 12.0629 0.8128 11.8218 1.05405L1.05698 11.8189C0.935977 11.9392 0.777908 12 0.619989 12Z"
                    fill="white"
                  />
                  <path
                    d="M11.3858 12C11.2277 12 11.0698 11.9399 10.9495 11.8189L0.183753 1.05405C-0.0573447 0.8128 -0.0573447 0.421921 0.183753 0.180823C0.424851 -0.0602744 0.81573 -0.0602744 1.05698 0.180823L11.8218 10.9458C12.0629 11.1869 12.0629 11.5778 11.8218 11.8189C11.7008 11.9392 11.5429 12 11.3858 12Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_303_14813">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ConfirmDeleteModalComponent {
  @Input() isOpen = false;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
