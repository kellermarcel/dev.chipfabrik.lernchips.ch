require "application_system_test_case"

class UfoldersTest < ApplicationSystemTestCase
  setup do
    @ufolder = ufolders(:one)
  end

  test "visiting the index" do
    visit ufolders_url
    assert_selector "h1", text: "Ufolders"
  end

  test "creating a Ufolder" do
    visit ufolders_url
    click_on "New Ufolder"

    fill_in "Name", with: @ufolder.name
    fill_in "Parent", with: @ufolder.parent_id
    fill_in "User", with: @ufolder.user_id
    click_on "Create Ufolder"

    assert_text "Ufolder was successfully created"
    click_on "Back"
  end

  test "updating a Ufolder" do
    visit ufolders_url
    click_on "Edit", match: :first

    fill_in "Name", with: @ufolder.name
    fill_in "Parent", with: @ufolder.parent_id
    fill_in "User", with: @ufolder.user_id
    click_on "Update Ufolder"

    assert_text "Ufolder was successfully updated"
    click_on "Back"
  end

  test "destroying a Ufolder" do
    visit ufolders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ufolder was successfully destroyed"
  end
end
