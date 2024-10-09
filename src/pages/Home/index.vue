<template>
	<div class="">
		<h1 class="text-xl font-bold">View Lists Page -----</h1>
		<!-- contact lists page start -->
		<div class="p-3 m-4 rounded bg-light-200">
			<button type="submit" class="inline-flex justify-center px-8 py-2 text-lg font-bold border rounded-md shadow-md create-list-btn focus:outline-none bg-primary-200 border-primary-500 text-primary-500">Create List</button>

			<div class="flex flex-col">
				<!-- <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> -->
				<div class="inline-block min-w-full py-2 align-middle">
					<div class="overflow-hidden shadow sm:rounded-lg">
						<table class="min-w-full bg-white">
							<thead class="bg-primary-300">
								<tr>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Title</th>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Contacts Count</th>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Import Contacts</th>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Add Existing Contacts</th>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Add New Contacts</th>
									<th scope="col" class="px-6 py-5 text-sm font-bold tracking-wider text-left border border-primary-800">Edit</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">List One Title</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span>135</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Import</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add Existing</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add New</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex content-around">
											<span class="w-6 h-6 text-green-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
												</svg>
											</span>
											<span class="w-6 h-6 text-red-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</span>
										</div>
									</td>
									<!-- <td class="px-6 py-4 text-sm text-light-500 whitespace-nowrap">
										</td>
										<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										</td> -->
								</tr>
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">List One Title</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span>135</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Import</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add Existing</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add New</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex content-around">
											<span class="w-6 h-6 text-green-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
												</svg>
											</span>
											<span class="w-6 h-6 text-red-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</span>
										</div>
									</td>
									<!-- <td class="px-6 py-4 text-sm text-light-500 whitespace-nowrap">
										</td>
										<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										</td> -->
								</tr>
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">List One Title</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span>135</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Import</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add Existing</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add New</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex content-around">
											<span class="w-6 h-6 text-green-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
												</svg>
											</span>
											<span class="w-6 h-6 text-red-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</span>
										</div>
									</td>
									<!-- <td class="px-6 py-4 text-sm text-light-500 whitespace-nowrap">
										</td>
										<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										</td> -->
								</tr>
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">List One Title</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span>135</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Import</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add Existing</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add New</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex content-around">
											<span class="w-6 h-6 text-green-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
												</svg>
											</span>
											<span class="w-6 h-6 text-red-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</span>
										</div>
									</td>
									<!-- <td class="px-6 py-4 text-sm text-light-500 whitespace-nowrap">
										</td>
										<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										</td> -->
								</tr>
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">List One Title</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span>135</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Import</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add Existing</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<a class="text-blue-700" href="#">Add New</a>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex content-around">
											<span class="w-6 h-6 text-green-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
												</svg>
											</span>
											<span class="w-6 h-6 text-red-600 cursor-pointer">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</span>
										</div>
									</td>
									<!-- <td class="px-6 py-4 text-sm text-light-500 whitespace-nowrap">
										</td>
										<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
										</td> -->
								</tr>

								<!-- More rows... -->
							</tbody>
						</table>
					</div>
				</div>
				<!-- </div> -->
			</div>
		</div>
		<!-- contact lists page end -->

		<h1 class="text-xl font-bold">Create Contact Page -----</h1>
		<!-- create contact page start -->
		<div class="m-4 rounded bg-light-200">
			<h4 class="p-3 text-xl font-bold">Import Contact List (CSV)</h4>

			<!-- upload csv file -->
			<div class="grid grid-cols-6 gap-6 p-3">
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="title" class="mb-1 text-lg font-medium">Upload File</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="title" type="file" name="title" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<button type="submit" class="inline-flex justify-center w-full px-10 py-3 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">Upload</button>
						</div>
					</div>
				</div>
			</div>

			<h4 class="p-3 text-xl font-bold">Add Contact</h4>

			<!-- create contact form -->
			<div class="grid grid-cols-6 gap-6 p-3">
				<!-- first name -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="first_name" class="mb-1 text-lg font-medium">First Name*</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="first_name" type="text" name="first_name" required class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- last name -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="first_name" class="mb-1 text-lg font-medium">Last Name</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="first_name" type="text" name="first_name" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- company -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="company" class="mb-1 text-lg font-medium">Company</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="company" type="text" name="company" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- email * -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="email" class="mb-1 text-lg font-medium">Email*</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="email" type="email" name="email" required class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- phone -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="email" class="mb-1 text-lg font-medium">Phone</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="phone_number" type="tel" name="phone_number" placeholder="(123) 456 7890" pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- address -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="address" class="mb-1 text-lg font-medium">Address</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="address" type="text" name="address" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- city -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="city" class="mb-1 text-lg font-medium">City</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="city" type="text" name="city" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- state / province -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="state" class="mb-1 text-lg font-medium">State</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="state" type="text" name="state" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- country -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="country" class="mb-1 text-lg font-medium">Country</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="country" type="text" name="country" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- zip / postal code -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="zip_code" class="mb-1 text-lg font-medium">Zip Code</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<input id="zip_code" type="text" name="zip_code" class="block w-full px-3 py-2 overflow-hidden text-sm bg-white border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
						</div>
					</div>
				</div>

				<!-- add to list* -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="add_to_list" class="mb-1 text-lg font-medium">Add to List*</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<select id="add_to_list" name="list_id" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
								<option>List One</option>
								<option>List Two</option>
								<option>List Three</option>
								<option>List Four</option>
								<option>List Five</option>
								<option>List Six</option>
								<option>List Seven</option>
							</select>
						</div>
					</div>
				</div>

				<!-- add to campaign -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="add_to_campaign" class="mb-1 text-lg font-medium">Add to Campaign</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<select id="add_to_campaign" name="campaign_id" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
								<option>Campaign One</option>
								<option>Campaign Two</option>
								<option>Campaign Three</option>
								<option>Campaign Four</option>
								<option>Campaign Five</option>
								<option>Campaign Six</option>
								<option>Campaign Seven</option>
							</select>
						</div>
					</div>
				</div>

				<!-- assign to user -->
				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<div class="flex items-center px-4 md:col-span-1 sm:px-0">
							<label for="assign_to_user" class="mb-1 text-lg font-medium">Assign to User</label>
						</div>
						<div class="mt-5 md:mt-0 md:col-span-2">
							<select id="assign_to_user" name="user_id" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
								<option>User One</option>
								<option>User Two</option>
								<option>User Three</option>
								<option>User Four</option>
								<option>User Five</option>
								<option>User Six</option>
								<option>User Seven</option>
							</select>
						</div>
					</div>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<div class="md:grid md:grid-cols-3 md:gap-6">
						<!-- <div class="flex items-center px-4 md:col-span-1 sm:px-0">
						</div> -->
						<div class="mt-5 md:mt-0 md:col-span-3">
							<button type="submit" class="inline-flex justify-center w-full px-10 py-2 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">Save</button>
						</div>
					</div>
				</div>
				<!-- <div class="col-span-6 text-right sm:col-span-6">
						<button type="submit" class="inline-flex justify-center px-10 py-2 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">
							Save
						</button>
				</div> -->
			</div>
		</div>
		<!-- create contact page end -->

		<h1 class="text-xl font-bold">Create Contact List Page -----</h1>
		<!-- create contact list page start -->
		<div class="m-4 rounded bg-light-200">
			<div class="p-3 md:grid md:grid-cols-3 md:gap-6">
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="title" class="mb-1 text-lg font-medium">Title*</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="title" type="text" name="title" required class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>

				<div class="flex items-center px-4 md:col-span-1 sm:px-0"></div>
				<div class="mt-5 text-right md:mt-0 md:col-span-2">
					<button type="submit" class="inline-flex justify-center px-10 py-2 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">Save</button>
				</div>
			</div>
		</div>
		<!-- create contact list page end -->

		<h1 class="text-xl font-bold">Search Contact Page -----</h1>
		<!-- search contact page start -->
		<div class="m-4 rounded bg-light-200">
			<!-- search contact form start -->
			<div class="p-3 md:grid md:grid-cols-3 md:gap-6">
				<!-- items per page -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="per_page" class="mb-1 text-lg font-medium">Items Per Page:</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<select id="per_page" name="per_page" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
						<option>5</option>
						<option>10</option>
						<option>15</option>
						<option>30</option>
						<option>40</option>
						<option>50</option>
						<option>100</option>
					</select>
				</div>
				<!-- tags -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="tags" class="mb-1 text-lg font-medium">Tags</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="tags" type="text" name="tags" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>
				<!-- show -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="show" class="mb-1 text-lg font-medium">Show</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<select id="show" name="show" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
						<option>All</option>
						<option>Parent One</option>
						<option>Parent Two</option>
						<option>Parent Three</option>
						<option>Parent Four</option>
						<option>Parent Five</option>
					</select>
				</div>
				<!-- registered after -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="registered_after" class="mb-1 text-lg font-medium">Registerd After</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="registered_after" type="date" name="registered_after" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>
				<!-- registered before -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="registered_before" class="mb-1 text-lg font-medium">Registerd Before</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="registered_before" type="date" name="registered_before" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>
				<!-- sort_by -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="sort_by" class="mb-1 text-lg font-medium">Sort By</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<select id="sort_by" name="sort_by" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg">
						<option>All</option>
						<option>Used</option>
					</select>
				</div>
				<!-- filter by name -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="name" class="mb-1 text-lg font-medium">Filter By Name</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="name" type="text" name="name" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>
				<!-- filter by phone number -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="email" class="mb-1 text-lg font-medium">Filter By Email</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="email" type="email" name="email" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>
				<!-- filter by phone number -->
				<div class="flex items-center px-4 md:col-span-1 sm:px-0">
					<label for="phone_number" class="mb-1 text-lg font-medium">Filter By Phone Number</label>
				</div>
				<div class="mt-5 md:mt-0 md:col-span-2">
					<input id="phone_number" type="tel" name="phone_number" placeholder="(123) 456 7890" pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
				</div>

				<div class="flex items-center px-4 md:col-span-1 sm:px-0"></div>
				<div class="mt-5 text-right md:mt-0 md:col-span-2">
					<button type="submit" class="inline-flex justify-center px-10 py-2 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">Search</button>
				</div>
			</div>
		</div>
		<!-- search contact page end-->

		<h1 class="text-xl font-bold">Create Tag Page -----</h1>
		<!-- create tag page start -->
		<div class="m-4 rounded bg-light-200">
			<!-- Heading -->
			<div class="flex flex-wrap items-stretch justify-between">
				<div class="w-1/6 p-3">
					<h4 class="mb-5 text-2xl font-bold">Parent</h4>
				</div>
				<div class="w-5/6 p-3">
					<h4 class="mb-5 text-2xl font-bold">Tags</h4>
				</div>
			</div>
			<!-- Tag Parents & Child list  -->
			<div v-for="(tag, id) in tagList" :key="id" class="flex flex-wrap items-stretch justify-between">
				<div class="w-1/6 p-3">
					<div class="flex items-center justify-between w-40 px-3 py-2 mt-2 text-sm font-medium border border-transparent rounded-md shadow-sm hover:bg-indigo-50" :style="tag.color != '' ? { background: tag.color } : 'background: #ffffff'">
						<span>{{ tag.name }}</span>
						<span class="w-6 h-6 text-black cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</span>
					</div>
				</div>
				<div class="w-5/6 p-3">
					<div class="flex flex-col">
						<div>
							<div v-for="(childTag, childId) in tag.childTag" :key="childId" class="float-left w-1/2 p-2 lg:w-1/5 md:w-1/3">
								<div class="flex items-center justify-between w-40 px-3 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm hover:bg-indigo-50" :style="childTag.color != '' ? { background: childTag.color } : 'background: #ffffff'">
									<span>{{ childTag.name }}</span>
									<span class="w-6 h-6 text-black cursor-pointer">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- create Tag Form -->
			<div class="p-3">
				<h1 class="mb-5 text-2xl font-bold">Create New Tag</h1>
				<form action="#" method="POST">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-6 px-6 py-2 bg-white shadow-lg sm:col-span-3 sm:rounded-md">
							<!-- Title -->
							<div class="py-2">
								<label for="title" class="block mb-1 text-lg font-medium">Title:</label>
								<p class="mt-2 text-sm text-gray-500">The title is how it appears on the contact.</p>
								<input id="title" v-model="tagForm.title" type="text" name="title" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
							</div>

							<!-- Slug -->
							<div class="py-2">
								<label for="slug" class="block mb-1 text-lg font-medium">Slug:</label>
								<p class="mt-2 text-sm text-gray-500">The "slug" is the URL-friendly version of the title. It is usually all lowercase and contains only letters, numbers and hyphens.</p>
								<input id="slug" type="text" name="slug" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
							</div>

							<!-- Parent -->
							<div class="py-2">
								<label for="parent" class="block mb-1 text-lg font-medium">Parent:</label>
								<p class="mt-2 text-sm text-gray-500">Assign a parent tag to create a hierarchy. The tag Gender, for example, would be the parent of Male and Female.</p>
								<input id="parent" type="text" name="parent" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
							</div>

							<!-- Color -->
							<div class="py-2">
								<label for="color" class="block mb-1 text-lg font-medium">Color:</label>
								<p class="mt-2 text-sm text-gray-500">Assign a color to visually identify your new tag easier.</p>
								<input id="color" v-model="tagForm.color" type="color" name="color" value="#CFD279" class="block w-full h-12 px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
							</div>

							<div class="py-2">
								Preview:
								<span class="px-2 py-2 text-white rounded" :style="{ background: tagForm.color }">
									{{ tagForm.title }}
								</span>
							</div>
							<!-- Save Button -->
							<div class="py-2">
								<button type="submit" class="w-full px-5 py-2 text-lg font-bold text-white border rounded-md shadow-md focus:outline-none border-primary-600 bg-primary-600 hover:bg-primary-700">Save Tag</button>
							</div>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<!-- <div class="flex justify-between" :style="{background: color}">
											<span class="self-center ml-10 text-2xl font-bold text-white">
													{{tagForm.title}}
											</span>
											<color-picker
													:color="color"
													:sucker-hide="true"
													:sucker-canvas="suckerCanvas"
													:sucker-area="suckerArea"
													@changeColor="changeColor"
											/>
									</div> -->
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- create tag page end-->
	</div>

	<!-- <div class="flex bg-primary-900">
		<div class="flex flex-col items-stretch flex-1 w-1/3 bg-primary-700">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore est, natus, temporibus labore, a quis sint voluptatum unde placeat atque doloremque harum? Distinctio, quibusdam nostrum! Obcaecati dolor reprehenderit minus.
				</p>
		</div>
		<div class="flex flex-col items-stretch flex-1 bg-primary-700">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore est, natus, temporibus labore, a quis sint voluptatum unde placeat atque doloremque harum? Distinctio, quibusdam nostrum! Obcaecati dolor reprehenderit minus.
				</p>
		</div>
	</div> -->
	<!-- <div class="grid gap-4 md:grid-cols-2">
		<div class="flex flex-col items-stretch">
			<div>
				<p class="mb-3 text-3xl font-bold">
					Company Name
				</p>
				<p class="text-lg">
					<span class="mr-6">
						Phone: <span>555-555-1212</span>
					</span>
					<span>
						Local Time: <span>7:27 PM EST</span>
					</span>
				</p>
			</div>
			<div class="mt-3 lg:mt-auto">
				<span class="text-lg">
					Date Range:
				</span>
				<date-range-picker ref="picker" v-model="dateRange" :ranges="showRanges" :locale-data="{ firstDay: 1, format: 'mm/dd/yyyy' }" :minDate="minDate" control-container-class="w-2/4 p-2 rounded cursor-pointer bg-light-100">
					<template v-slot:input="picker">
							{{ picker.startDate }} - {{ picker.endDate }}
					</template>
				</date-range-picker>
			</div>
		</div>

		
		<div>
			<div class="grid grid-cols-2 gap-4">
				<div class="p-3 rounded w-60 h-60 bg-light-100">
					<p class="mb-3 text-center">
						Monthly Message Credits Available
					</p>
					<div class="grid grid-cols-3 gap-2">
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>SMS</span>
						</div>
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>Email</span>
						</div>
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>Voice</span>
						</div>
					</div>
				</div>
				<div class="p-3 rounded w-60 h-60 bg-light-100">
					<p class="mb-3 text-center">
						Message Pack Credits Available
					</p>
					<div class="grid grid-cols-3 gap-2">
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>SMS</span>
						</div>
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>Email</span>
						</div>
						<div class="flex flex-col items-center content-center justify-center">
							<img src="../../assets/media/coloured_meter.png" alt="" class="mb-1" height="50" width="50">
							<span>Voice</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
</template>
<style lang="scss" scoped>
	// .create-list-btn
	// {
	//   background-color: #dff6e0;
	//   color: #92929d;
	// }
</style>

<script lang="ts">
	import { Component, Vue } from 'nuxt-property-decorator'
	// import colorPicker from '@caohenghu/vue-colorpicker'
	// import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
	// import DateRangePicker from 'vue2-daterange-picker'

	@Component({
		name: 'test-home',
		layout: 'basic',
		components: {
			// 'colorPicker': colorPicker
			// 'DateRangePicker': DateRangePicker
		},
	})
	export default class extends Vue {
		private msg: string = 'welcome to my app'
		private tagList: Array<object> = [
			{
				id: 1,
				color: '',
				name: 'Parent One',
				childTag: [
					{ id: 1, color: '#F8EDCF', name: 'Tag One' },
					{ id: 2, color: '#F8EDCF', name: 'Tag Two' },
					{ id: 3, color: '', name: 'Tag Three' },
					{ id: 4, color: '', name: 'Tag Four' },
					{ id: 4, color: '', name: 'Tag Five' },
					{ id: 4, color: '', name: 'Tag Six' },
					{ id: 5, color: '#F8EDCF', name: 'Tag Seven' },
				],
			},
			{
				id: 1,
				color: '#F8EDCF',
				name: 'Parent Two',
				childTag: [
					{ id: 1, color: '', name: 'Tag One' },
					{ id: 2, color: '', name: 'Tag Two' },
					{ id: 3, color: '', name: 'Tag Three' },
					{ id: 4, color: '', name: 'Tag Four' },
					{ id: 4, color: '#F8EDCF', name: 'Tag Five' },
					{ id: 4, color: '#F8EDCF', name: 'Tag Six' },
					{ id: 5, color: '#F8EDCF', name: 'Tag Seven' },
				],
			},
			{
				id: 1,
				color: '#F8EDCF',
				name: 'Parent Three',
				childTag: [
					{ id: 1, color: '#F8EDCF', name: 'Tag One' },
					{ id: 2, color: '#F8EDCF', name: 'Tag Two' },
					{ id: 3, color: '#F8EDCF', name: 'Tag Three' },
					{ id: 4, color: '#F8EDCF', name: 'Tag Four' },
					{ id: 4, color: '#F8EDCF', name: 'Tag Five' },
					{ id: 4, color: '#F8EDCF', name: 'Tag Six' },
					{ id: 5, color: '#F8EDCF', name: 'Tag Seven' },
				],
			},
		]

		private tagForm: object = {
			title: null,
			slug: null,
			parent: null,
			color: null,
		}
	}
</script>
