require "test_helper"

class OfoldersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ofolder = ofolders(:one)
  end

  test "should get index" do
    get ofolders_url
    assert_response :success
  end

  test "should get new" do
    get new_ofolder_url
    assert_response :success
  end

  test "should create ofolder" do
    assert_difference('Ofolder.count') do
      post ofolders_url, params: { ofolder: { name: @ofolder.name, organisation_id: @ofolder.organisation_id, parent_id: @ofolder.parent_id } }
    end

    assert_redirected_to ofolder_url(Ofolder.last)
  end

  test "should show ofolder" do
    get ofolder_url(@ofolder)
    assert_response :success
  end

  test "should get edit" do
    get edit_ofolder_url(@ofolder)
    assert_response :success
  end

  test "should update ofolder" do
    patch ofolder_url(@ofolder), params: { ofolder: { name: @ofolder.name, organisation_id: @ofolder.organisation_id, parent_id: @ofolder.parent_id } }
    assert_redirected_to ofolder_url(@ofolder)
  end

  test "should destroy ofolder" do
    assert_difference('Ofolder.count', -1) do
      delete ofolder_url(@ofolder)
    end

    assert_redirected_to ofolders_url
  end
end
